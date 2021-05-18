import CommonModule from '../../adapter/injector/CommonModule';

describe('Common Module tests', () => {
  it('must be initializable', async (done) => {
    expect(() => new CommonModule()).not.toThrowError();
    done();
  });
});
