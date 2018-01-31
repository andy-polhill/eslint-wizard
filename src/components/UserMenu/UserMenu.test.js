import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { UserMenu as UserMenuAxiom } from 'bw-axiom';
import UserMenu from './UserMenu';
import unitTestSelector from '../../utils/unitTestSelector';

const token = 's0MeT0k3n';
const render = (props, opts = {}) => shallow(<UserMenu { ...props } />, opts);

describe('UserMenu', () => {
  let props;
  let opts;

  beforeEach(() => {
    props = {
      email: 'a@b.co',
      imageUrl: 'http://a.png',
      firstName: 'Ace',
      lastName: 'Spades',
      onChangePasswordClick: sinon.stub(),
      showAccountAdministration: false,
    };
    opts = {
      context: {
        brandwatchAuthLogout: sinon.stub(),
        brandwatchAuthGetToken: sinon.stub().resolves(token),
        t: () => { return 'translated-text'; },
      },
    };
  });

  test('renders nothing if there is no email property', () => {
    props.email = null;
    expect(render(props, opts).get(0)).toBeFalsy();
  });

  test('calls the brandwatchAuthLogout context property when the user logs out', () => {
    render(props, opts).find(UserMenuAxiom).prop('onLogout')();
    expect(opts.context.brandwatchAuthLogout.calledOnce).toBeTruthy();
  });

  test('calls the onChangePasswordClick property when the user clicks change password', () => {
    render(props, opts).find(unitTestSelector('change-password-menu-option')).simulate('click');
    expect(props.onChangePasswordClick.calledOnce).toBeTruthy();
  });

  test('shows an account administration menu item', () => {
    props.showAccountAdministration = true;
    expect(render(props, opts)
      .find(unitTestSelector('account-administration-menu-option'))
      .length).toBe(1);
  });

  describe('help center', () => {
    test('click disables menu option from being clicked again', () => {
      const component = render(props, opts);
      component.find(unitTestSelector('help-center-menu-option')).simulate('click');
      expect(component.find(unitTestSelector('help-center-menu-option')).prop('disabled')).toBe(true);
    });

    describe('successfully getting token', () => {
      let component;

      beforeAll(() => {
        sinon.stub(window, 'open');
        component = render(props, opts);
        component.find(unitTestSelector('help-center-menu-option')).simulate('click');
        return opts.context.brandwatchAuthGetToken.lastCall.returnValue.then(() => {
          component.update();
        });
      });

      test('re-enables the menu option', () => {
        expect(component.find(unitTestSelector('help-center-menu-option')).prop('disabled')).toBe(false);
      });

      test('goes to a link with the token', () => {
        expect(window.open.firstCall.args[0].includes(token)).toBe(true);
      });
    });

    describe('failed to get token', () => {
      beforeAll(() => {
        opts.context.brandwatchAuthGetToken = sinon.stub().rejects();
      });

      test('re-enables the menu option', () => {
        const component = render(props, opts);
        component.find(unitTestSelector('help-center-menu-option')).simulate('click');
        return opts.context.brandwatchAuthGetToken.lastCall.returnValue.catch(() => {
          component.update();
          expect(component.find(unitTestSelector('help-center-menu-option')).prop('disabled')).toBe(false);
        });
      });
    });
  });
});
