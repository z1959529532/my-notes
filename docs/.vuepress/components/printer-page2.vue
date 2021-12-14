<template>
    <div id="printer-page2">
    </div>
</template>

<script>
    export default {
        name: 'printer-page2',
        data() {
            return {
                textArr: [
                    {title: '跟随光，成为光！', stop: 4},
                    {title: '没有梦想，和咸鱼有什么区别！', stop: 5}
                ],
                curIndex: 0,
                h1: null,
                spans: null
            };
        },
        mounted() {
            setTimeout(() => {
                this.init();
            }, 1000);
        },
        methods: {
            init() {
                this.h1 = document.createElement('h1');
                document.getElementById('printer-page2').appendChild(this.h1);
                
                if (this.curIndex === this.textArr.length) {
                    this.curIndex = 0;
                    // return;
                }
                this.h1.innerHTML = this.textArr[this.curIndex].title;
                this.h1.innerHTML = this.h1.textContent.replace(/\S/g, `<span>$&</span>`);
                
                let delay = 0;
                this.spans = [...document.querySelectorAll('#printer-page2 h1 span')];
                this.spans.forEach((span, index) => {
                    delay += 0.14;
                    // if (textArr[curIndex].stop === index) delay += 0.3;
                    span.style.setProperty('--delay', `${delay}s`);
                });
                // 监听到最后一个span给光标闪动
                this.h1.addEventListener('animationend', this.goForward);
            },
    
            goForward(e) {
                if (e.target === document.querySelector('#printer-page2 h1 span:last-child')) {
                    this.h1.classList.add('ended');
            
                    setTimeout(() => {
                        this.h1.removeEventListener('animationend', this.goForward);
                        this.h1.classList.remove('ended');
                
                        this.goBack();
                    }, 1600);
                }
            },
    
            goBack() {
                let goBackDelay = 0;
                this.spans.reverse().forEach((span, i) => {
                    span.style.width = '2ch';
                    span.style.animation = '0.1s text-out ease-in-out forwards';
                    goBackDelay += 0.1;
                    span.style.animationDelay = `${goBackDelay}s`;
                });
                this.h1.addEventListener('animationend', this.textEnd);
            },
    
            textEnd(e) {
                if (e.target === document.querySelector('#printer-page2 h1 span:first-child')) {
                    this.spans.forEach(span => {
                        span.remove();
                    });
                    this.h1.removeEventListener('animationend', this.textEnd);
                    document.getElementById('printer-page2').removeChild(this.h1);
                    this.curIndex++;
                    this.init();
                }
            }
            
        }
    };
</script>

<style>
    #printer-page2 {
        height: 50vh;
        background-color: rgba(0, 0, 0, .1);
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    @media screen and (max-device-width: 600px) {
        #printer-page2 h1 {
            font-size: 1.2rem;
        }
    }
    
    @media screen and (min-device-width: 600px) {
        #printer-page2 h1 {
            font-size: 1.8rem;
        }
    }

    #printer-page2 h1 {
        margin: 0;
        padding: 0;
        /* 等宽字体 */
        font-family: monospace;
        position: relative;
    }
    
    /* 光标 */
    #printer-page2 h1::after {
        content: '';
        display: inline-block;
        position: absolute;
        width: 4px;
        height: 2.2ch;
        background: #000;
        border-radius: 2px;
        right: -0.5ch;
    
        /*animation: 1.1s cursor steps(2, jump-none) infinite;*/
    }
    #printer-page2 h1.ended::after {
        animation: 1.1s cursor infinite;
    }
    @keyframes cursor {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    #printer-page2 h1 span {
        display: inline-block;
        overflow: hidden;
        width: 0;
    
        --delay: 10s;
        animation: 0.1s text-in ease-in-out forwards;
        /*animation: 0.1s text-out ease-in-out forwards;*/
        animation-delay: var(--delay);
    }
    @keyframes text-in {
        from {
            width: 0;
        }
        to {
            width: 2ch;
        }
    }
    
    @keyframes text-out {
        from {
            width: 2ch;
        }
        to {
            width: 0;
        }
    }
</style>