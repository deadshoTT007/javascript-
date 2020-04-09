class Github{
constructor(){
    this.client_id='fbf2a84e2a005d1e28de';
    this.client_secret='f7316303649dc8c47eb2e64ee0a1d7023db552b1';
    this.repos_count=5;               //onlu declaring 5 repos to show
    this.repos_sort='created:asc';     //aaranging in the lastest order(last 5 repos committed)
}
    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);
        const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret${this.client_secret}`);
        const profile=await profileResponse.json();
        const repos=await repoResponse.json();
          return{
            profile,
            repos

        }
    }
}