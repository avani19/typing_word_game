let db = (function($) {

  return {
    saveRound: (wordData) => {
      console.log('herrrr')
      console.log(wordData)
      $.ajax({
        type: "POST",
        url: '/saveWordData',
        data: {wordData: wordData},
        success: (res) => {
          console.log('success');
        }
      });
    }
  }
})($)
