const mainData = () => {

    const renderAnimeList = (array, ganres) => {
        console.log(array);
        console.log(ganres);
    }

    const renderTopAnime = (array, ganres) => {
        const wrapper = document.querySelector('.filter__gallery');

        wrapper.innerHTML = '';
        array.forEach((item) => {

            wrapper.insertAdjacentHTML('afterbegin', `
                <div class="product__sidebar__view__item set-bg mix" data-setbg="${item.image}">
                    <div class="ep">${item.rating} / 10</div>
                    <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
                    <h5><a href="/anime-details.html">${item.title}</a></h5>
                </div>
                `)
        })

        wrapper.querySelectorAll('.set-bg').forEach((elem) => {
            elem.style.backgroundImage = `url(${elem.dataset.setbg})`
        })
    }

    // fetch('https://sfo.cloud.appwrite.io/v1/storage/buckets/68b478570014ec5489b8/files/68b4796b0002432e0796/view?project=68b470350000f6671ada&mode=admin')
    fetch('./db.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const ganres = new Set()

            renderTopAnime(data.anime.sort((a, b) => b.views - a.views).slice(0, 5));

            data.anime.forEach((item) => {
                ganres.add(item.ganre)
            })
            renderAnimeList(data.anime, ganres)

        })
}

mainData();