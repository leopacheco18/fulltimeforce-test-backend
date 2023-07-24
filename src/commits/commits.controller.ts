import { Controller, Get, Query  } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CommitInterface } from './interface/commit.interface';

@Controller('api/commits')
@ApiTags('Commits')
export class CommitsController {

    constructor(private commitsService: CommitsService){}

    @Get()
    @ApiOkResponse({type: CommitInterface, isArray: true})
    @ApiOperation({description: 'Get all commits'})
    @ApiQuery({
        name: "page",
        type: String,
        description: "Page parameter. Optional, default value is 1",
        required: false
      })
    async get() : Promise<CommitInterface[]>{
        return this.commitsService.getCommits(1, 100);
    }

    

    @Get('/last-commit')
    @ApiOkResponse({type: CommitInterface, isArray: true})
    @ApiOperation({description: 'Get last commit'})
    async getLastCommit(): Promise<CommitInterface[]>{
        return this.commitsService.getCommits(1,1);
    }

    @Get('/pushes')
    @ApiOkResponse({type: Number})
    @ApiOperation({description: 'Get all pushes'})
    async getPushes(): Promise<Number> {
        return (await this.commitsService.getPushes()).length;
    }

    @Get('/count')
    @ApiOkResponse({type: Number})
    @ApiOperation({description: 'Get all commits'})
    async getCount(): Promise<Number> {
        return (await this.commitsService.getCommits(1, 100)).length;
    }

    @Get('/languages')
    @ApiOperation({description: 'Get all languages stats'})
    async getLanguages(): Promise<any> {
        return this.commitsService.getLanguageStats();
    }

}
