import {INCREMENT, DECREMENT} from '../actions/actionTypes';
import {delay} from 'redux-saga';
import {put, takeEvery} from 'redux-saga/effects';

export function* sayHello() {
    console.log('Hello World!');
}

export function* increment() {
    console.log('This is increment saga.')
}

export function* watchIncrement() {
    yield takeEvery(INCREMENT, increment);
}

export function* decrement() {
    console.log('This is decrement saga.')
}

export function* watchDecrement() {

}