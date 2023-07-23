import { HttpService } from '@nestjs/axios';
import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import config from 'src/config';
import { CommitInterface } from './interface/commit.interface';
import { PushInterface } from './interface/push.interface';
import { AxiosResponse } from 'axios';

@Injectable()
export class CommitsService {
  private headers;

  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    private readonly httpService: HttpService,
  ) {
    this.headers = {
      Authorization: `Bearer ${configService.GITHUB_ACCESS_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': ' 2022-11-28',
    };
  }

  async getCommits(page = 1, per_page = 10): Promise<CommitInterface[]> {
    const response : AxiosResponse<CommitInterface[]> = await firstValueFrom(
      this.httpService.get(
        `https://api.github.com/repos/${this.configService.GITHUB_OWNER}/${this.configService.GITHUB_REPO}/commits?page=${page}&per_page=${per_page}`,
        this.headers,
      ),
    );
    return response.data;
  }

  
  async getLanguageStats(): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.get(
        `https://api.github.com/repos/${this.configService.GITHUB_OWNER}/${this.configService.GITHUB_REPO}/languages`,
        this.headers,
      ),
    );
    return response.data;
  }

  async getPushes(): Promise<PushInterface[]> {
    const response: AxiosResponse<PushInterface[]> = await firstValueFrom(
      this.httpService.get(
        `https://api.github.com/repos/${this.configService.GITHUB_OWNER}/${this.configService.GITHUB_REPO}/events?page=1&per_page=100`,
        this.headers,
      ),
    );
    return response.data.filter((event) => event.type === 'PushEvent');
  }
  
}
