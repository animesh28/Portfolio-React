const reverb = function(object, amount = 10, time = randomBetween(2, 3), timeMax){
    let tweenName = object + 'ReverbTween' + this._reactInternalInstance._debugID,
        sceneName = object + 'ReverbScene' + this._reactInternalInstance._debugID;

    if (!this.controller) this.controller = new ScrollMagic.Controller();

    if (timeMax) time = randomBetween(time, timeMax);

    this[tweenName] = TweenMax.to(object, time, { transform: `+=translateY(${amount}px)`, ease: Power3.easeOut, paused: true });
    this[sceneName] = new ScrollMagic.Scene({ offset: 0, duration: 1 })
                                      .triggerHook(1)
                                      .on('update', e => {
                                          let { scrollPos } = e, { lastScrollPos } = this.state;
                                          let scrolling = lastScrollPos > scrollPos ? 'up' : 'down';
                                          this.setState({ lastScrollPos: scrollPos, scrolling });
    					})
                                      .setTween(this[tweenName])
                                      .addTo(this.controller);
}

// just calls callback once user stops scrolling
const scrollStop = function ( callback ) {
    if ( !callback || Object.prototype.toString.call( callback ) !== '[object Function]' ) return;
    var isScrolling;
    window.addEventListener('scroll', function ( event ) {
        window.clearTimeout( isScrolling );
        isScrolling = setTimeout(function() {
            callback();
        }, 66);
    }, false);
};

class SuperFunTime extends React.Component {
    constructor(props) {
        super(props);
        this.reverb = globals.reverb.bind(this);
    }
    componentDidMount(){
          this.reverb('.work-container', 400, 2);
          globals.scrollStop(() => {
              console.log('stopped scrolling ' + this.state.scrolling, this['.work-container' + 'ReverbTween' + this._reactInternalInstance._debugID].progress());
              this['.work-container' + 'ReverbTween' + this._reactInternalInstance._debugID].play(0);
          })
      }
}