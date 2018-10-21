import { MachinaryModule } from './machinary.module';

describe('MachinaryModule', () => {
  let machinaryModule: MachinaryModule;

  beforeEach(() => {
    machinaryModule = new MachinaryModule();
  });

  it('should create an instance', () => {
    expect(machinaryModule).toBeTruthy();
  });
});
