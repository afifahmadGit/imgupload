
reg = /(jpg|png|jpeg|svg)/i
let show = document.getElementById('show')
let path = document.getElementById('path')
let upload = document.getElementById('upload')


path.addEventListener('change', (e) => {
    console.log(e)
    ext = path.value.split('.').pop()
    show.style.display = 'block'
    if (ext.match(reg) == null) {
        path.value = null
        show.innerHTML = `<h4 class="my-3">Please Upload (jpeg | png | jpeg | svg) Format</h4>`
        console.log('')

    }
    else {

        let kb = e.target.files[0].size / 1024
        if (kb > 50 && kb < 2000) {
            show.innerHTML = ` <img class="my-3" id="img" style="border-radius:10px;" src="${URL.createObjectURL(e.target.files[0])}" alt="" width='500px' height='300px'><br><button class="btn btn-primary" id='close'>Close</button>`
            console.log(e.target.files[0].size / 1024)
            let close = document.getElementById('close')
            close.addEventListener('click', (e) => {
                e.preventDefault()
                if (show.style.display = 'block') {
                    show.style.display = 'none'
                    path.value = null
                }
            })
        }
        else {
            path.value = null
            show.innerHTML = `<h3>File size should be above 50 kb and below 2 mb</h3>`
        }
    }

})
// cons

// for uploading to storage
upload.addEventListener('click', (e) => {
    e.preventDefault()
    let img = document.getElementById('img')
    // console.log(img.src)
    let arr = localStorage.getItem('images')
    arr = JSON.parse(arr)
    if (localStorage.getItem('images') == null) {
        arr = []
        arr.push(img.src)
        localStorage.setItem('images', JSON.stringify(arr))
    }
    else {
        // for same element
        if (arr[0] == img.src) {
            show.innerHTML = `<h3>Image From this URL already presents</h3>`
        }
        for (i = 0; i < arr.length; i++) {

            if (arr[i] == img.src) {
                break
            }
        }
        if (i == arr.length) {
            arr.push(img.src)
            localStorage.setItem('images', JSON.stringify(arr))
            document.getElementById('sub').innerHTML = `<h3>Your image submitted Succesful!</h3>`
        } else {
            show.innerHTML = `<h3>Image From this URL already presents</h3>`
            document.getElementById('sub').innerHTML = ``
        }

    }

})




