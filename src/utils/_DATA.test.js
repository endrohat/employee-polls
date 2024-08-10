import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
  } from './_DATA.js'


  describe('getUserById', () => {
    it('will return the question with id when saved', async() => {
        
        let question = { optionOneText : "opt1", 
            optionTwoText : "opt2" , 
            author :"author1"};

        var result = await _saveQuestion(question);
        expect(result.id).not.toBeNull()
        expect(result.timestamp).not.toBeNull()
        expect(result.author).toEqual("author1");
    });

    
    it('will return an error if there is missing data', async() => {
        let question = { optionOneText : "opt1", 
            author :"author1"};
        await expect(_saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });


    it('will return true when answer is saved with correct data', async() => {
        let info  = { authedUser : 'mtsamis', qid : "8xf0y6ziyjabvozdd253nd", answer : 'optionTwo'}

        var result = await _saveQuestionAnswer(info);
        expect(result).toEqual(true);
    });

    it('will return an error for answer if there is missing data', async() => {
        let info  = { authedUser : 'mtsamis', qid : "8xf0y6ziyjabvozdd253nd"}
        await expect(_saveQuestionAnswer(info)).rejects.toEqual("Please provide authedUser, qid, and answer");
    });
});