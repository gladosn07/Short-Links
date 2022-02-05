export async function getLinkSave(key) {
    const myLinks = localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

export async function saveLinks(key, newLink) {
    let linkStored = await getLinkSave(key);

    const hasLink = linkStored.some(link => link.id === newLink.id)

    if(hasLink){
        alert('Esse link ja existe na sua lista')
        return
    }

    linkStored.push(newLink)

    await localStorage.setItem(key, JSON.stringify(linkStored))
}

export function deleteLink(links, id){
    let myLinks = links.filter(item => {
        return (item.id != id)
    })

    localStorage.setItem('@shotLink', JSON.stringify(myLinks))

    return myLinks;

}