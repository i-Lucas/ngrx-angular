import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { Observable, catchError, map, mergeMap, of } from "rxjs";
import * as fromAppActions from "./app.actions";
import { LoginService } from "../shared/services/login.service";
import { Router } from "@angular/router";
import { Action } from "@ngrx/store";

@Injectable()
export class AppEffects {

    constructor(
        private actions$: Actions,
        private loginService: LoginService,
        private router: Router
    ) { }

    doLogin$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromAppActions.doLogin),
            mergeMap((user) => this.performLogin(user))
        )
    );

    private performLogin({ name, email }: User): Observable<Action> {

        return this.loginService.login(name, email).pipe(
            map(user => this.handleLoginSuccess(user)),
            catchError((error: string) => of(fromAppActions.doLoginFailure({ error })))
        );
    }

    private handleLoginSuccess(user: User): Action {

        this.router.navigate(['dashboard']);
        return fromAppActions.doLoginSuccess({ user });
    }
}


// export class AppEffects {

//     doLogin$ = createEffect(() => this.actions$
//         .pipe(
//             ofType(fromAppActions.doLogin),
//             mergeMap(({ name, email }) => this.loginService.login(name, email)
//                 .pipe(
//                     map(user => {

//                         this.router.navigate(['dashboard']);
//                         return fromAppActions.doLoginSuccess({ user });
//                     }),
//                     catchError(() => of(fromAppActions.doLoginFailure())),
//                 ),
//             ),
//         ),
//     );

//     constructor(private actions$: Actions,
//         private loginService: LoginService,
//         private router: Router) {
//     }
// }