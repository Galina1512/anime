const mainData = () => {

    fetch('https://sfo.cloud.appwrite.io/v1/storage/buckets/68b478570014ec5489b8/files/68b4796b0002432e0796/view?project=68b470350000f6671ada&mode=admin')
    // fetch('./db.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
        })
}
mainData();