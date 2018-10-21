export class Machinary {
  height: number;
  grade: string;
  manufacturer: string;
  purchase: string;
  purchase_date: number;
  purchase_price: number;
  type: string;
  code: string;
  model_name: string;
  serial: string;
  desc?: string;
  status?: string;
  daily_rental: number;
  monthly_rental: number;

  isExpanded?: boolean;
  static getHeightList() {
    return [6, 7, 9, 11, 14];
  }
  static getGradeList() {
    return ['A', 'B', 'C', 'D', 'E', 'F'];
  }
}
