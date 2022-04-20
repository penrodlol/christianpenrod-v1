import { GithubInfo } from '@models/github-info';
import { Octokit } from '@octokit/rest';

export const octokit = new Octokit();

export async function fetchInfo(repo: string): Promise<GithubInfo> {
  const owner = process.env.NEXT_PUBLIC_GITHUB_USER_NAME as string;
  const githubRepo = await octokit.rest.repos.get({ owner, repo });

  return {
    name: githubRepo.data.name,
    description: githubRepo.data.description,
    url: githubRepo.data.html_url,
    stars: githubRepo.data.stargazers_count,
    forks: githubRepo.data.forks_count,
    language: githubRepo.data.language,
  };
}
