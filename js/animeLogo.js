import anime from '/lib/animejs/lib/anime.es.js';

function fitElementToParent(el, padding, exception) {
    
    var timeout = null;

    function resize() {

        if (timeout) clearTimeout(timeout);
        
        anime.set(el, {scale: 1});
        
        if (exception) anime.set(exception, {scale: 1});
        
        var pad               = padding || 0;
        var parentEl          = el.parentNode;
        var elOffsetWidth     = el.offsetWidth - pad;
        var parentOffsetWidth = parentEl.offsetWidth;
        var ratio             = parentOffsetWidth / elOffsetWidth;
        var invertedRatio     = elOffsetWidth / parentOffsetWidth;
        
        timeout = setTimeout(function() {
            anime.set(el, {scale: ratio});
            if (exception) anime.set(exception, {scale: invertedRatio});
        }, 10);
    }

    resize();
    window.addEventListener('resize', resize);
}
var bouncePath = anime.path('.bounce path');
var step1_properties = {
    autoplay: false,
    easing: 'easeOutSine'
}
var step2_properties = {
    targets: '.letter-i .line',
    duration: 0,
    begin: function(a) { a.animatables[0].target.removeAttribute('stroke-dasharray'); }
};
var step3_properties = {
    targets: '.bounced',
    transformOrigin: ['50% 100% 0px', '50% 100% 0px'],
    translateY: [
        {value: [150, -160], duration: 190, endDelay: 20, easing: 'cubicBezier(0.225, 1, 0.915, 0.980)'},
        {value: 4, duration: 120, easing: 'easeInQuad'},
        {value: 0, duration: 120, easing: 'easeOutQuad'}
    ],
    scaleX: [
        {value: [.25, .85], duration: 190, easing: 'easeOutQuad'},
        {value: 1.08, duration: 120, delay: 85, easing: 'easeInOutSine'},
        {value: 1, duration: 260, delay: 25, easing: 'easeOutQuad'}
    ],
    scaleY: [
        {value: [.3, .8], duration: 120, easing: 'easeOutSine'},
        {value: .35, duration: 120, delay: 180, easing: 'easeInOutSine'},
        {value: .57, duration: 180, delay: 25, easing: 'easeOutQuad'},
        {value: .5, duration: 190, delay: 15, easing: 'easeOutQuad'}
    ],
    delay: anime.stagger(80)
};
var step4_properties = {
    targets: '.dot',
    opacity: { value: 1, duration: 100 },
    translateY: 250,
    scaleY: [4, .7],
    scaleX: { value: 1.3, delay: 100, duration: 200},
    duration: 280,
    easing: 'cubicBezier(0.350, 0.560, 0.305, 1)'
};
var step5_properties = {
        targets: '.letter-m .line',
        easing: 'easeOutElastic(1, .8)',
        duration: 600,
        d: function(el) { return el.dataset.d2 },
        begin: function(a) { a.animatables[0].target.removeAttribute('stroke-dasharray'); }
};
var step6_properties = {
    targets: ['.letter-a', '.letter-n', '.letter-i', '.letter-e'],
    translateX: 0,
    easing: 'easeOutElastic(1, .6)',
    duration: 800,
    delay: anime.stagger(40, {from: 2.5}),
    change: function(a) { a.animatables[2].target.removeAttribute('stroke-dasharray'); }
};
var step7_properties = {
    targets: '.letter-m .line',
    d: function(el) { return el.dataset.d3 },
    easing: 'spring(.2, 200, 3, 60)',
};
var step8_properties = {
    targets: '.dot',
    translateX: bouncePath('x'),
    translateY: bouncePath('y'),
    rotate: {value: '1turn', duration: 790},
    scaleX: { value: 1, duration: 50, easing: 'easeOutSine' },
    scaleY: [
        { value: [1, 1.5], duration: 50, easing: 'easeInSine' },
        { value: 1, duration: 50, easing: 'easeOutExpo' }
    ],
    easing: 'cubicBezier(0, .74, 1, .255)',
    duration: 800
};
var step9_properties = {
    targets: '.dot',
    scale: 1,
    rotate: '1turn',
    scaleY: {value: .5, delay: 0, duration: 150, delay: 230},
    translateX: 430,
    translateY: [
        {value: 244, duration: 100},
        {value: 204, duration: 200, delay: 130},
        {value: 224, duration: 225, easing: 'easeOutQuad', delay: 25}
    ],
    duration: 200,
    easing: 'easeOutSine'
};
var step10_properties = {
        targets: '.letter-i .line',
        transformOrigin: ['50% 100% 0', '50% 100% 0'],
        d: function(el) { return el.dataset.d2 },
        easing: 'cubicBezier(0.400, 0.530, 0.070, 1)',
        duration: 80
};
var step11_properties = {
        targets: '.logo-letter',
        translateY: [
            {value: 40, duration: 150, easing: 'easeOutQuart'},
            {value: 0, duration: 800, easing: 'easeOutElastic(1, .5)'}
        ],
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: anime.stagger(60, {from: 'center'})
};
var step12_properties = {
        targets: '.bounced',
        scaleY: [
            {value: .4, duration: 150, easing: 'easeOutQuart'},
            {value: .5, duration: 800, easing: 'easeOutElastic(1, .5)'}
        ],
        delay: anime.stagger(60, {from: 'center'})
};
var step13_properties = {
        targets: '.logo-text',
        translateY: [
            {value: 20, easing: 'easeOutQuad', duration: 100},
            {value: 0, easing: 'easeOutElastic(1, .9)', duration: 450}
        ],
        opacity: {value: [0.001, 1], duration: 50},
        duration: 500
};
var step14_properties = {
        targets: '.main-logo-circle',
        opacity: {value: [0.001, 1], duration: 1500},
        backgroundImage: ['linear-gradient(-135deg, #FFFFFF 50%, #F6F4F2 75%, #F6F4F2 100%, #DDDAD7 100%)', 'linear-gradient(-135deg, #FFFFFF 5%, #F6F4F2 40%, #F6F4F2 70%, #DDDAD7 100%)'],
        translateY: {value: ['60px', 0], easing: 'cubicBezier(0.175, 0.865, 0.245, 0.840)'},
        duration: 2000,
        easing: 'easeInOutQuad'
};
var step15_properties = {
        targets: ['.description-title','.description-paragraph'],
        opacity: {value: [0.001, 1], easing: 'cubicBezier(0.175, 0.865, 0.245, 0.840)'},
        translateY: {value: ['80px', 0], easing: 'cubicBezier(0.175, 0.865, 0.245, 0.840)'},
        duration: 3500,
        delay: anime.stagger(75)
};

// main logo animation

var logoAnimation = (function() {
    
    var logoAnimationEl = document.querySelector('.logo-animation');
    
    fitElementToParent(logoAnimationEl, 0, '.bounce svg');
    
    anime.set(['.letter-a', '.letter-n', '.letter-i'], {translateX: 70});
    anime.set('.letter-e', {translateX: -70});
    anime.set('.dot', { translateX: 630, translateY: -200 });
    
    var logoAnimationTL = anime.timeline(step1_properties)
    .add(step2_properties , 0)
    .add(step3_properties , 1000)
    .add(step4_properties , '-=290')
    .add(step5_properties , '-=140')
    .add(step6_properties , '-=600')
    .add(step7_properties , '-=680')
    .add(step8_properties , '-=1273')
    .add(step9_properties , '-=474')
    .add(step10_properties, '-=670')
    .add(step11_properties, '-=670')
    .add(step12_properties, '-=1090')
    .add(step13_properties, '-=970')
    .add(step14_properties, '-=970')
    .add(step15_properties, '-=1300')
    
    return logoAnimationTL;
    
})();


logoAnimation.play();