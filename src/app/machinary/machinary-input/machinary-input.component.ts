import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MachinaryService } from '@app/shared/services';
import { Machinary } from '@app/shared/models';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-machinary-input',
  templateUrl: './machinary-input.component.html',
  styleUrls: ['./machinary-input.component.scss']
})
export class MachinaryInputComponent implements OnInit, OnDestroy {
  @Output()
  close = new EventEmitter<string>();

  isBusy = false;
  machinary: Machinary;

  manufacturerList: string[] = [];
  heightList: number[] = [];
  gradeList: string[] = [];
  _subscribers: any = {};
  formErrors: any;
  form: FormGroup;
  constructor(private fb: FormBuilder, private machinaryService: MachinaryService) {}

  ngOnInit() {
    this.machinary = {
      height: 6,
      grade: 'A',
      manufacturer: '',
      purchase: '갑을정공',
      purchase_date: 1540153086555,
      purchase_price: 20000000,
      code: 'SJ4632',
      model_name: '',
      serial: '',
      type: 'battery',
      desc: '',
      monthly_rental: 0,
      daily_rental: 0
    };
    this.manufacturerList = ['스카이락', 'JLG'];
    this.gradeList = Machinary.getGradeList();
    this.heightList = Machinary.getHeightList();
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.cleanUpSubscribes();
  }

  cleanUpSubscribes() {
    Object.keys(this._subscribers).forEach(key => {
      this._subscribers[key].unsubscribe();
    });
    this._subscribers = {};
  }

  onCancel() {
    this.close.emit('canceled');
  }

  onAdd() {
    this.isBusy = true;
    this.machinaryService.add(this.machinary).subscribe(res => {
      this.isBusy = false;
      if (res.ok === 1) {
        this.close.emit('added');
      }
    });
  }

  buildForm(): void {
    this.formErrors = {
      height: '',
      grade: '',
      manufacturer: '',
      purchase: '',
      purchase_date: '',
      purchase_price: '',
      code: '',
      model_name: '',
      serial: '',
      monthly_rental: '',
      daily_rental: '',
      desc: ''
    };
    this.form = this.fb.group({
      height: [this.machinary.height],
      grade: [this.machinary.grade],
      manufacturer: [this.machinary.manufacturer],
      purchase: [this.machinary.purchase],
      purchase_date: [new Date(this.machinary.purchase_date)],
      purchase_price: [this.machinary.purchase_price],
      code: [this.machinary.code],
      model_name: [this.machinary.model_name],
      serial: [this.machinary.serial],
      monthly_rental: [this.machinary.monthly_rental],
      daily_rental: [this.machinary.daily_rental],
      desc: [this.machinary.desc]
    });
    if (this._subscribers.valueChanges) {
      this._subscribers.valueChanges.unsubscribe();
    }
    this._subscribers.valueChanges = this.form.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  applyChanges() {
    if (!this.form) {
      return;
    }
    const form = this.form;
    this.machinary = {
      height: form.value['height'],
      grade: form.value['grade'],
      manufacturer: form.value['manufacturer'],
      purchase: form.value['purchase'],
      purchase_date: new Date(form.value['purchase_date']).getTime(),
      purchase_price: form.value['purchase_price'],
      code: form.value['code'],
      model_name: form.value['model_name'],
      serial: form.value['serial'],
      type: '배터리',
      monthly_rental: form.value['monthly_rental'],
      daily_rental: form.value['daily_rental'],
      desc: form.value['desc']
    };
  }

  onValueChanged(data?: any) {
    if (!this.form) {
      return;
    }
    const form = this.form;
    this.applyChanges();

    for (const field of Object.keys(this.formErrors)) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const ctl = form.get(field);

      if (ctl && ctl.dirty && !ctl.valid) {
        const messages = '항목 필요합니다.';
        for (const key of Object.keys(ctl.errors)) {
          this.formErrors[field] += messages + ' ';
        }
      }
    }
  }
}
