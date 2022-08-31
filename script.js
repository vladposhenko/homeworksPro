const search = document.getElementById('search')
const submit = document.getElementById('submit')
const userBlock = document.getElementById('userBlock')


const fetchUser = async (user) => {
        const request = await fetch(' https://api.github.com/users/' + user)
        let response = await request.json()
        return response
}

const getLogin = () => search.value


function appendUser (user) {
    userBlock.innerHTML = ''
    const block = document.createElement('div')
    const avatar = document.createElement('img')
    const repos = document.createElement('p')
    const followers = document.createElement('p')
    const following = document.createElement('p')
    const login = document.createElement('h2')

    login.innerText = `Login: ${user.login}`
    following.innerText = `Following: ${user.following}` 
    followers.innerText = `Followers: ${user.followers}` 
    repos.innerText = `Public Repositories: ${user.public_repos}` 
    avatar.src = user.avatar_url

    block.append(login)
    block.append(following)
    block.append(followers)
    block.append(repos)
    userBlock.append(avatar)
    userBlock.append(block)

}

function appendUndefinedPage () {
    userBlock.innerHTML = ''
    const error = document.createElement('p')
    error.innerText = 'User is not found'
    userBlock.append(error)
}

submit.addEventListener('click', async () => {
    let login = getLogin()
    let user =  await fetchUser(login)
    if(user.message === 'Not Found') {
        appendUndefinedPage()
    } else {
        appendUser(user)
    }
})



