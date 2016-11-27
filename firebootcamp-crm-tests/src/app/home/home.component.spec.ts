import { HomeComponent } from './home.component';

describe('Component: Home Component', () => {
    it(`It should be truthy`, () => {
        let app = new HomeComponent();
        expect(app).toBeFalsy();
    });
});
