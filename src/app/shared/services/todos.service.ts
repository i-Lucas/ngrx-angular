import { Injectable } from '@angular/core';
import { Observable, delay, mergeMap, of, throwError } from 'rxjs';
import { getEntities, setEntities } from 'src/assets/db';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private delay: number = 1000;

    getList(page: number): Observable<Todo[]> {

        const start = page * 10;
        return of(getEntities().slice(start, start + 10)).pipe(delay(this.delay));
    }

    toggleDone(id: number): Observable<Todo> {
        let todo: Todo | any;
        getEntities().forEach(item => {
            if (item.id === id) {
                todo = item;
                item.done = !item.done;
            }
        });
        return !!todo ? of(todo).pipe(delay(50)) : throwError(() => `Todo com id: ${id} não existe.`);
    }

    create(todo: Partial<Todo>): Observable<Todo> {
        const id = getEntities()[0].id + 1;
        const createdAt = new Date();

        if (todo.title === undefined) {
            return throwError(() => "O título da tarefa não pode ser undefined.");
        }

        const entity: Todo = {
            id,
            createdAt,
            title: todo.title,
            done: false,
        };

        setEntities([entity, ...getEntities()]);

        return of(entity).pipe(delay(this.delay));
    }


    remove(id: number): Observable<boolean | never> {
        const length = getEntities().length;
        const filtered = getEntities().filter(item => item.id !== id);
        setEntities(filtered);
        return of('')
            .pipe(
                delay(this.delay),
                mergeMap(() => filtered.length === length ?
                    throwError(() => `Todo com id: ${id} não existe.`)
                    : of(true),
                ),
            );
    }
}
