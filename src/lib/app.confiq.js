
export class appScript{
    constructor(){
        this.logo = ""
        this.theme = ""
        this.language = ""
        this.is_login = false
    }
    themeConfig(theme){
        this.theme = theme
        document.body.className = `${this.theme}`
    }
    setAuth(auth){
        this.is_login = auth
    }
}


