$(document).ready(function () {
    const words = {
      easy: [
        { word: 'apple', translation: 'яблуко' },
        { word: 'banana', translation: 'банан' },
        { word: 'orange', translation: 'апельсин' },
        { word: 'cherry', translation: 'вишня' },
        { word: 'plum', translation: 'слива' },
        { word: 'melon', translation: 'диня' },
        { word: 'grape', translation: 'виноград' },
        { word: 'lemon', translation: 'лимон' },
        { word: 'peach', translation: 'персик' },
        { word: 'pear', translation: 'груша' }
      ],
      medium: [
        { word: 'watermelon', translation: 'кавун' },
        { word: 'apricot', translation: 'абрикос' },
        { word: 'fig', translation: 'інжир' },
        { word: 'date', translation: 'фінік' },
        { word: 'raspberry', translation: 'малина' },
        { word: 'blueberry', translation: 'лохина' },
        { word: 'berry', translation: 'ягода' },
        { word: 'cucumber', translation: 'огірок' },
        { word: 'carrot', translation: 'морква' },
        { word: 'cabbage', translation: 'капуста' }
      ],
      hard: [
        { word: 'asparagus', translation: 'спаржа' },
        { word: 'broccoli', translation: 'броколі' },
        { word: 'cauliflower', translation: 'цвітна капуста' },
        { word: 'celery', translation: 'селера' },
        { word: 'brussels sprouts', translation: 'брюссельська капуста' },
        { word: 'eggplant', translation: 'баклажан' },
        { word: 'radish', translation: 'редис' },
        { word: 'onion', translation: 'цибуля' },
        { word: 'potato', translation: 'картопля' },
        { word: 'pumpkin', translation: 'гарбуз' }
      ]
    };
   
    let currentLevel = [];
    let currentWordIndex = 0;
    let correctCount = 0;
    let incorrectCount = 0;
   
    function updateUI() {
      if (currentWordIndex < currentLevel.length) {
        $('#wordCard').text(currentLevel[currentWordIndex].word);
        $('#step').text(`${currentWordIndex + 1}/${currentLevel.length}`);
        $('#correctCount').text(correctCount);
        $('#incorrectCount').text(incorrectCount);
        $('#translationInput').val('');
      } else {
        showModal();
      }
    }
   
    function showModal() {
      $('#modal').removeClass('hidden');
    }
   
    function resetGame() {
      currentWordIndex = 0;
      correctCount = 0;
      incorrectCount = 0;
      $('#gameContainer').addClass('hidden');
      $('#difficultySelection').removeClass('hidden');
    }
   
    $('#checkButton').on('click', function () {
      const userTranslation = $('#translationInput').val().trim().toLowerCase();
      const correctTranslation = currentLevel[currentWordIndex].translation.toLowerCase();
   
      if (userTranslation === correctTranslation) {
        correctCount++;
      } else {
        incorrectCount++;
      }
   
      currentWordIndex++;
      updateUI();
    });
   
    $('#prevButton').on('click', function () {
      if (currentWordIndex > 0) {
        currentWordIndex--;
        updateUI();
      }
    });
   
    $('#nextButton').on('click', function () {
      if (currentWordIndex < currentLevel.length - 1) {
        currentWordIndex++;
        updateUI();
      }
    });
   
    $('#difficultySelection button').on('click', function () {
      const level = $(this).data('level');
      currentLevel = words[level];
      $('#difficultySelection').addClass('hidden');
      $('#gameContainer').removeClass('hidden');
      updateUI();
    });
   
    $('#closeModal').on('click', function () {
      $('#modal').addClass('hidden');
      resetGame();
    });
   });
   