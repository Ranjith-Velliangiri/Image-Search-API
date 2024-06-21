/*const accesskey="aEfn8IKe4XkMecE4Sir8r2Y20cv6_mlvfODHH2RCacs";

const search=document.querySelector('.search');
const inputEl=document.querySelector('.search-input');
const searchResults=document.querySelector('.search-results');
const showmore=document.querySelector('.show-more-btn');
const searchBtn=document.querySelector('.search-btn');
let searchterm="";
let page=1;

async function getimages(){
    searchterm=inputEl.value;
    const url=`https://api.unsplash.com/search/photos?pages=${page}&query=${searchterm}&client_id=${accesskey}`;
    console.log(searchterm);
    const response=await fetch(url);
    const data=await response.json();
    const results=data.results;

    if(page === 1)
        {
            searchResults.innerHTML="";
        }

        results.map((result)=>{
            const imageWrapper=document.createElement('div');
            imageWrapper.classList.add('search-result');
            const img=document.createElement('img');
            img.classList.add('search-image');
            img.src=result.urls.small;
            img.alt=result.alt_description;
            const imglink=document.createElement('a');
            imglink.href=result.links.html;
            imglink.classList.add('search-link');
            imglink.target="_blank";
            imglink.textContent=result.alt_description;
            
            searchResults.appendChild(imageWrapper);
            imageWrapper.appendChild(img);
            imageWrapper.appendChild(imglink);
        });
        page++;
        if(page>1)
            showmore.style.display="inline-block";
}

search.addEventListener('submit',(event)=>{
    event.preventDefault();
    page=1;
    getimages();
})

showmore.addEventListener('click',()=>{
    getimages();
})
*/
const accesskey = "WMuRP8LyIe7XQ3GsYwZbLLfGPW492Fo4V52lnZztZkw";

const search = document.querySelector('.search');
const inputEl = document.querySelector('.search-input');
const searchResults = document.querySelector('.search-results');
const showmore = document.querySelector('.show-more-btn');
const searchBtn = document.querySelector('.search-btn');
let searchterm = "";
let page = 1;

async function getimages() {
    searchterm = inputEl.value;
    console.log(`Searching for: ${searchterm}, page: ${page}`); // Debugging log

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchterm}&client_id=${accesskey}`;
    console.log(`Fetching URL: ${url}`); // Debugging log

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('API Response:', data); // Debugging log

        // Ensure that results are defined and is an array
        const results = data.results || [];
        if (!Array.isArray(results)) {
            throw new Error("Unexpected API response structure");
        }

        if (page === 1) {
            searchResults.innerHTML = "";
        }

        if (results.length === 0) {
            console.log("No results found"); // Debugging log
            searchResults.innerHTML = "<p>No results found</p>";
            return;
        }

        results.forEach((result) => {
            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add('search-result');
            const img = document.createElement('img');
            img.classList.add('search-image');
            img.src = result.urls.small;
            img.alt = result.alt_description;
            const imglink = document.createElement('a');
            imglink.href = result.links.html;
            imglink.classList.add('search-link');
            imglink.target = "_blank";
            imglink.textContent = result.alt_description;

            searchResults.appendChild(imageWrapper);
            imageWrapper.appendChild(img);
            imageWrapper.appendChild(imglink);
        });

        page++;
        if (page > 1) {
            showmore.style.display = "inline-block";
        }
    } catch (error) {
        console.error("Error fetching images:", error); // Debugging log
        searchResults.innerHTML = "<p>Error fetching images</p>";
    }
}

search.addEventListener('submit', (event) => {
    event.preventDefault();
    page = 1;
    getimages();
});

showmore.addEventListener('click', () => {
    getimages();
});

