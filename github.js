class Github {
  constructor() {
    this.client_id = '5bb128b98618c2057769';
    this.client_secret = '6754e2b7596a7bdd4d19fbbc03d0de8ac651be76'
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  // Create getUser method
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }
}