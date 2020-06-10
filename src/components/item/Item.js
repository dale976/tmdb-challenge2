import {Lightning, Utils} from "wpe-lightning-sdk";
import {getImgUrl} from '../../lib/tools';

export default class Item extends Lightning.Component{
    static _template(){
        return {
            Image: {
                src: Utils.asset('images/logo-large.png'),
            },
            Title: {
                y: 310, x: 15, h: 50,
                text: {
                    fontFace: "Magra-Regular", fontSize: 24, wordWrap: true,
                    textOverflow: 'ellipsis', w: 220 - (2 * 15)
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
        this.patch({
            smooth: {
                alpha: 1,
                scale: 1.1
            },
            Title: {
                text: {
                    fontFace: 'Magra-Bold'
                }
            }
        })
    }

    _unfocus() {
        this.patch({
            smooth: {
                alpha: 0.75,
                scale: 1
            },
            Title: {
                text: {
                    fontFace: 'Magra-Regular'
                }
            }
        })
    }

    set item(v){
        // @todo: patch the correct image and title
        this.tag('Image').src = getImgUrl(v.poster_path)
        this.patch({
            Image: {
                src: getImgUrl(v.poster_path), w: 220
            },
            Title: {
                text: {text: v.original_title}
            }
        })
    }
}
