$(document).ready(function () {
    $('#start').click(function () {
        $('.circle').remove(); // Remove existing circles

        const width = parseInt($('#width').val());
        const growthAmount = parseInt($('#growth').val());
        const growRate = parseInt($('#rate').val());
        const numberOfCircles = parseInt($('#number').val());

        for (let i = 0; i < numberOfCircles; i++) {
            createCircle(width, growthAmount, growRate);
        }
    });

    function createCircle(initialWidth, growthAmount, growRate) {
        const container = $('.container');
        const $circle = $('<div class="circle"></div>');
        $circle.css({
            width: initialWidth + 'px',
            height: initialWidth + 'px',
            top: Math.random() * (container.height() - initialWidth) + 'px',
            left: Math.random() * (container.width() - initialWidth) + 'px'
        });

        container.append($circle);

        const interval = setInterval(function () {
            let currentWidth = $circle.width();
            $circle.css({
                width: currentWidth + growthAmount + 'px',
                height: currentWidth + growthAmount + 'px'
            });
        }, growRate);

        $circle.click(function () {
            clearInterval(interval);
            $circle.remove();
        });
    }
});
