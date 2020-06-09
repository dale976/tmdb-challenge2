import {Lightning, Utils} from "wpe-lightning-sdk";
import {getImgUrl} from '../../lib/tools';

export default class Item extends Lightning.Component{
    static _template(){
        return {
            Image: {
                src: Utils.asset('images/logo-large.png'),
            },
            Title: {
                y: 310, x: 20,
                text: {
                    fontFace: "Magra-Regular", fontSize: 24, wordWrap: false,
                    textOverflow: 'ellipsis', w: 185 + 15 - (2 * 20)
                },
            },
            alpha: 0.75
        }
    }

    /**
     * @todo:
     * - toggle alpha on focus / unfocus (transition)
     */

    _focus() {
        this.setSmooth('alpha', 1);
        this.tag('Title').text.fontFace = 'Magra-Bold';
    }

    _unfocus() {
        this.setSmooth('alpha', 0.75);
        this.tag('Title').text.fontFace = 'Magra-Regularj';
    }

    set item(v){
        // @todo: patch the correct image and title
        this.tag('Image').src = getImgUrl(v.poster_path)
        this.patch({
            Image: {
                src: getImgUrl(v.poster_path)
            },
            Title: {
                text: {text: v.original_title}
            }
        })
    }
}
