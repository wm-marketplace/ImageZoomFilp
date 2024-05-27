Prefab.onPropertyChange = function(key, newVal, oldVal) {
    Prefab.init();
};

Prefab.onReady = function() {
    Prefab.init();
};

Prefab.init = function() {
    const {
        dataset,
        thumbnailclass
    } = Prefab;

    let allTags = `<div class="${thumbnailclass ? thumbnailclass : 'allImages'}">`;
    $.each(dataset, function(i) {
        let imageTag = `<img data-magnify="gallery" data-src="${dataset[i].mainUrl}" src="${dataset[i].thumbnailUrl}">`;
        allTags += imageTag;
    });

    $('.imageContainer').empty().append(allTags + '</div>');
    $('[data-magnify]').magnify({
        headerToolbar: ['close'],
        title: false,
        callbacks: {
            opened: function(context) {
                var element = document.querySelector('.magnify-stage img');
                panzoom(element);
            },
        },
    });
};
