module.exports = {
    name: 'BreweryService',
    func: function ($http) {

        const articles = [

            {title: 'Birdsong does it again', image: 'https://static1.squarespace.com/static/52810817e4b0a82a769586ee/t/553664bee4b0819833f302b0/1429628102305/', content: '+1 fashion axe whatever, small batch cardigan beard before they sold out mixtape skateboard mlkshk vaporware trust fund tbh. Selvage twee fashion axe shaman cold-pressed. Four dollar toast enamel pin retro yr master cleanse stumptown, aesthetic next level semiotics selfies snackwave lumbersexual twee heirloom. Typewriter flannel synth blog leggings pabst messenger bag raw denim actually keytar. Cray DIY vice umami, ugh shabby chic hell of pork belly ennui taxidermy health goth. ' }, 
            {title: 'New Beer from OMB', image: 'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2015/07/olde-mecklenburg-brewery1.jpg', content: '+1 fashion axe whatever, small batch cardigan beard before they sold out mixtape skateboard mlkshk vaporware trust fund tbh. Selvage twee fashion axe shaman cold-pressed. Four dollar toast enamel pin retro yr master cleanse stumptown, aesthetic next level semiotics selfies snackwave lumbersexual twee heirloom. Typewriter flannel synth blog leggings pabst messenger bag raw denim actually keytar. Cray DIY vice umami, ugh shabby chic hell of pork belly ennui taxidermy health goth. ' }, 
            {title: 'Free Range renovations', image: 'http://www.freerangebrewing.com/wp-content/uploads/2014/12/sampleIMG.jpg', content: '+1 fashion axe whatever, small batch cardigan beard before they sold out mixtape skateboard mlkshk vaporware trust fund tbh. Selvage twee fashion axe shaman cold-pressed. Four dollar toast enamel pin retro yr master cleanse stumptown, aesthetic next level semiotics selfies snackwave lumbersexual twee heirloom. Typewriter flannel synth blog leggings pabst messenger bag raw denim actually keytar. Cray DIY vice umami, ugh shabby chic hell of pork belly ennui taxidermy health goth. ' }, 
            {title: 'New Brewery: Hyde is coming to South End', image: 'https://farm1.staticflickr.com/732/20748895398_345d604b86.jpg', content: '+1 fashion axe whatever, small batch cardigan beard before they sold out mixtape skateboard mlkshk vaporware trust fund tbh. Selvage twee fashion axe shaman cold-pressed. Four dollar toast enamel pin retro yr master cleanse stumptown, aesthetic next level semiotics selfies snackwave lumbersexual twee heirloom. Typewriter flannel synth blog leggings pabst messenger bag raw denim actually keytar. Cray DIY vice umami, ugh shabby chic hell of pork belly ennui taxidermy health goth. ' }, 
        ]; 

        const monthly = [
            {name: 'Lenny Boy', image: 'http://www.helenadamsrealty.com/blog/wp-content/uploads/2014/10/charlotte-beer_eric-gaddy.jpg'}, 
        ]; 

        return {

            getArticle: function () {
               return articles; 
            }, 

            getMonthly: function () {
                return monthly; 
            }
        }

    }
}