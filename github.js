class Github {
  constructor() {
    this.client_id = '5bb128b98618c2057769';
    this.client_secret = '6754e2b7596a7bdd4d19fbbc03d0de8ac651be76'
  }

  // Create getUser method
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}