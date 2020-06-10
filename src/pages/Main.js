import {Lightning, Utils} from 'wpe-lightning-sdk';
import {List} from "../components"

export default class Main extends Lightning.Component{
    static _template() {
        return {
            Background: {
                rect: true, colorBottom: 0xff000000, w: 1920, h: 1080, x: 0, y: 0
            },
            List: {
                x: 100, y: 560, zIndex: 3, type: List, alpha: 1, signals: {onListScroll: 'onScroll'}
            },
            // @todo: add logo
            Logo: {
                src: Utils.asset("images/logo.png"),
                x: 100, y: 100, alpha: 1,
            }
        };
    }

    static _states() {
        return [
            class List extends this {
                onScroll(args) {
                }
            }
        ];
    }

    _init() {
        this._index = 0; 
    }

    _focus() {

    }

    /**
     * @todo: add set movies() that will be called by the data-provider
     * inside set movies create new List child and call it's movies setter
     * and hand over the movies
     */
    set movies(data){
        this.tag('List').label = 'Popular';
        this.tag('List').movies = data && data.results;
    }

    _unfocus() {
        // @todo
    }

    _getFocused() {
        // @todo: delegate focus to List child
        return this.tag('List');
    }

}
