let wordSys = {

    setAnimatables: function(){
        let animatables = $(".animated");
        let context = this;
        $.each(animatables, function (index, item) {
            let classes = item.className.split(/\s+/);
            let itemAnimTags = classes.filter(tag => animTags.includes(tag));
            itemAnimTags.forEach((tag) =>{
                $(item).removeClass(tag);
            });
            classes.forEach((element) => {
                if (element === "separate"){
                    $(item).removeClass(element);
                    context.separateForAnim(item, itemAnimTags);
                }

                if (delays.includes(element)){
                    let delayVals = $(item).data("delay").split("/");
                    let start = parseFloat(delayVals[0]);
                    let end = parseFloat(delayVals[1]);
                    context.setAnimDelays($(item), start, end);

                }
            });
            $(item).removeClass("animated");
        })
    },

    separateForAnim: function(separable, tags){
        let text = separable.textContent;
        $(separable).text("");
        let chars = text.split("");
        // console.log(chars);
        $.each($(chars), function(index, item) {
            // console.log(typeof item);
            let char = $('<span></span>');
            if (item !== " "){
                char.text(item);
            } else{
                $(char).css("width", "0.25em");
            }
            tags.forEach(tag => {
                char.addClass(tag);
            });
            $(separable).append(char);
        });
    },

    setAnimDelays: function(elem, firstDelay, lastDelay) {
        let childAmount = elem.children().length;
        let diff = (lastDelay - firstDelay) / (childAmount - 1);
        for(let i = 0; i < childAmount; i++){
            let child = elem.children()[i];
            $(child).css("animation-delay", firstDelay + (diff * i) + "s");
        }
    },

    onload: function () {
        this.setAnimatables();
    }
};
