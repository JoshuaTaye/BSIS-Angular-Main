import {MenuItem} from '../../interfaces/menu-item.interface';
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';

type NavItemsState = {
  navItems: MenuItem[];
}

const initialState: NavItemsState = {
  navItems: []
}

export const NavItemsStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withMethods((store) => {
      return {
        setNavItems: (navItems: MenuItem[]) => {
          patchState(store, {navItems})
        },
        clearNavItems: () => {
          patchState(store, {navItems: []})
        }
      }
    }
  )
);
