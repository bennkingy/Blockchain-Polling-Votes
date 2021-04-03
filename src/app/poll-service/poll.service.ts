import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Poll, PollForm } from '../types';
import { Web3Service } from '../blockchain/web3.service';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private web3: Web3Service) {
  }

  getPolls(): Observable<Poll[]> {
    return of([{
      id: 1,
      question: 'Do you like dogs or cats?',
      results: [0,5,1],
      voted: false,
      options: ['cats', 'dogs', 'rabbits'],
      image: 'https://images.pexels.com/photos/1909802/pexels-photo-1909802.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
      id: 2,
      question: 'Do you like summer or winter?',
      results: [0,7,1],
      voted: false,
      options: ['pink', 'green', 'red'],
      image: 'https://images.pexels.com/photos/1909806/pexels-photo-1909806.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
      id: 3,
      question: 'Do you like fish or meat?',
      results: [0,5,7],
      voted: true,
      options: ['cats', 'yellow', 'trees'],
      image: 'https://images.pexels.com/photos/1909809/pexels-photo-1909809.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    }]).pipe(delay(200));
  }

  vote(pollId: number, voteNumber: number) {
    this.web3.executeTransaction("vote", pollId, voteNumber);
    console.log(pollId, voteNumber);
  }

  createPoll(poll: PollForm) {
    console.log(poll);
  }

}
