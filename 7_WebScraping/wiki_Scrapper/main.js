const url="https://en.wikipedia.org/wiki/Main_Page"

const request=require("request")
const cheerio=require("cheerio")
const path=require('path')
const fs=require('fs')
const pdfkit=require("pdfkit")

request(url,cb)

function cb(error , response, html){
    if(error){
        console.error(error)
    }else{
        handleHtml(html)
    }
}

function handleHtml(html){
    let $=cheerio.load(html)
    let anchorElem=$('.portal-hright.portal-vbot a')
    let link=anchorElem.attr('href')
    // console.log(link)
    let fulllink='https://en.wikipedia.org/'+link
    // console.log(fulllink)
    
    AllPortals(fulllink)


}

function AllPortals(url2){
    request(url2,function(error,response,html){
        if(error){
            console.log(error)
        }else{
            AtoZindex(html)

        }
    })
}
function AtoZindex(html){
    let $=cheerio.load(html)
    let anchorarr=$('.hlist.noprint a[title="Wikipedia:Contents/A–Z index"]')
    let link =$(anchorarr[0]).attr('href')
    // console.log(link)
    let fulllink='https://en.wikipedia.org/'+link
    // console.log(fulllink)
    Ptag(fulllink)
}

function Ptag(url3){
    request(url3,function(error,response,html){
        if(error){
            console.log(error)
        }else{
            Allpages(html)

        }
    })
}

function Allpages(html){
    let $=cheerio.load(html)
    let anchorElem=$('[id="toc"] tr [title="Special:AllPages/P"]')
    let link=anchorElem.attr('href')
    // console.log(link)
    let fulllink='https://en.wikipedia.org/'+link
    // console.log(fulllink)
    Ptag2(fulllink)

}

function Ptag2(url4){
    request(url4,function(error,response,html){
        if(error){
            console.log(error)
        }else{
            P(html)

        }
    })
}
function P(html){
    let $=cheerio.load(html)
    let anchorElem=$('.mw-allpages-chunk li [title="P"]')
    let link=anchorElem.attr('href')
    // console.log(link)
    let fulllink='https://en.wikipedia.org/'+link
    // console.log(fulllink)
    content(fulllink)

}

function content(url5){
    request(url5,function(error,response,html){
        if(error){
            console.log(error)
        }else{
            contentofPTag(html)

        }
    })
}

function dirCreator(filepath){
    if(fs.existsSync(filepath)==false){
        fs.mkdirSync(filepath)
    }
}
let dir_path=path.join(__dirname,"wikicontent")
dirCreator(dir_path)
let filepath=path.join(dir_path,"content"+'.pdf')
// console.log(filepath)

function contentofPTag(html){
    let $=cheerio.load(html)
    let bodycontent=$('[id="bodyContent"]').text()
    // console.log(bodycontent)
    let pdfdoc=new pdfkit()
    pdfdoc.pipe(fs.createWriteStream(filepath))
    pdfdoc.text(bodycontent)
    pdfdoc.end()
    

}