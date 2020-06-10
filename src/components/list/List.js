import {Lightning} from "wpe-lightning-sdk";
import Item from '../item/Item';

const ITEM_WIDTH = 220;
const PADDING = 15;

export default class List extends Lightning.Component {
    static _template() {
        return {
            Label: {
                text: {text: '', fontFace: 'Magra-Regular'}
            },
            Movies: {
                y: 75
            }
        }
    }

    _init() {
        this._index = 0;
        this.setIndex(this._index);
    }

    _handleLeft() {
        // @todo: update index and call setIndex
        this.setIndex(Math.max(0, --this._index))
    }

    _handleRight() {
        // @todo: update index and call setIndex
        this.setIndex(Math.min(++this._index, this.tag('Movies').children.length - 1))
    }

    setIndex(index) {
        /**
         * @todo:
         * Implement working setIndex method
         * that stores index and position movie component to focus
         * on selected item
         */
        this._index = index;
        let xOffset = -(ITEM_WIDTH + (2 * PADDING)) * index;
        this.tag('Movies').setSmooth('x', xOffset)
    }

    set label(v) {
        // @todo: update list title
        this.tag('Label').text = v;
    }

    set movies(v) {
        // we add an array of object with type: Item
        this.tag('Movies').children = v.map((el, idx) => {
            return {
                type: Item,
                item: el,
                x: idx * (ITEM_WIDTH + (2 * PADDING))
            }
        })
    }

    get items() {
        return this.tag("Movies").children;
    }

    get activeItem() {
        // @todo: return selected item
        return this.tag("Movies").children[this._index];
    }

    _getFocused() {
        // @todo:
        return this.activeItem;
    }
}
