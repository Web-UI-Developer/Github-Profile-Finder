class Github{
  constructor () {
    this.client_id = '055177e6b2c87878840e';
    this.client_secret = '515bbea2edc1e249de6c0df4942b6b61756fa4d5';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(users){
    const profileResponse = await fetch (`https://api.github.com/users/${users}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch (`https://api.github.com/users/${users}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return{
      profile,
      repos
    }
  }
}