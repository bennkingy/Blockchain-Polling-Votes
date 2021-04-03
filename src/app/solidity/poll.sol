pragma solidity ^0.8.1;

contract PollContract {

    // Poll structure
    struct Poll {
        uint256 id;
        string question;
        string image;
        uint64[] votes;
        bytes32[] options;
    }

    // Voter structure
    struct Voter {
        address id;
        uint256[] votedIds;
        mapping(uint256 => bool) votedMap;
    }

    // Empty array to hold polls
    Poll[] private polls;

    // Map wallet address to voter
    mapping(address => Voter) private voters;

    // Create poll function
    function createPoll(string memory _question, string memory _image, bytes32[] memory _options) public {
        require(bytes(_question).length > 0, "Empty question");
        require(_options.length > 1, "At least 2 options required");

        uint256 pollId = polls.length;

        Poll memory newPoll = Poll({
            id: pollId,
            question: _question,
            image: _image,
            options: _options,
            votes: new uint64[](_options.length)
        });

        // Add new poll to empty Poll array
        polls.push(newPoll);
    }
}
