# rs-lang-back
api documentation for rs-lang-back
## Setup and Running

- Use `node 14.x` or higher.
- Clone this repo: `https://github.com/DiffickMenLogo/rs-lang-back.git`.
- Go to downloaded folder: `$ cd async-race-api`.
- Install dependencies: `$ npm install`.
- Start server: `$ npm start`.
- Now you can send requests to the address: `https://rs-lang-back-diffickmenlogo.herokuapp.com/`.

## Usage

- **Garage**
    - [Get All Words](https://github.com/DiffickMenLogo/rs-lang-back#getAllWords)
- **User**
    - [Register](https://github.com/DiffickMenLogo/rs-lang-back#Register)
    - [Login](https://github.com/DiffickMenLogo/rs-lang-back#Login)
    - [Get User Words](https://github.com/DiffickMenLogo/rs-lang-back#GetUserWords)
    - [Update User Words](https://github.com/DiffickMenLogo/rs-lang-back#UpdateUserWords)
    - [Statistics](https://github.com/DiffickMenLogo/rs-lang-back#UserStatistics)
    - [Change Name](https://github.com/DiffickMenLogo/rs-lang-back#ChangeName)
    - [Upload new Image](https://github.com/DiffickMenLogo/rs-lang-back#ChangeImage)
    - [Feedback](https://github.com/DiffickMenLogo/rs-lang-back#Feedback)

**GetAllWords**
----
Returns json data about words.


<details>

* **URL**

    /allWords

* **Method:**

    `GET`

* **Headers:**

    None

*  **URL Params**

    None

* **Query Params**

    **Optional:**
 
    `page=[integer]`
  
    `limit=[integer]`


* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      [
        {
            "_id": "ObjectId(5e8f8f8f8f8f8f8f8f8f8f8)",
            "group": 0,
            "page": 0,
            "word":"alcohol",
            "image":"files/01_0002.jpg",
            "audio":"files/01_0002.mp3",
            "audioMeaning":"files/01_0002_meaning.mp3",
            "audioExample":"files/01_0002_example.mp3",
            "textMeaning":"<i>Alcohol</i> is a type of drink that can make people drunk.","textExample":"A person should not drive a car after he or she has been drinking <b>a...",
            "transcription":"[ǽlkəhɔ̀ːl]"
        }
      ]
    ```
 
* **Error Response:**

    None

* **Notes:**

    None

</details>

**Register**
----
Post new user to the database.

<details>

* **URL**

    /signup

* **Method:**

    `Post`

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "name": "String",
        "email": "String required",
        "password": "String required",
        "avatarURL": "String",
        "settings": {
            "soundVolume": "Number",
            "musicVolume": "Number",
            "wordVolume": "Number",
            "difficultWord": "Boolean",
            "deleteWord": "Boolean",
            "translateWord": "Boolean",
            "transleteSentences": "Boolean",
            "theme": "String"
        },
        "statistics": {
            "gameName": "String",
            "totalWords": "Number",
            "correctPercent": "Number",
            "longestSeries": "Number",
            "date": "String"
        },
      }
    ```
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** 
    'signup',error

</details>

**Login**
----
Find user in the database.

<details>

* **URL**

    /signin

* **Method:**

    `Post`

* **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "name": "String",
        "email": "String required",
        "password": "String required",
        "avatarURL": "String",
        "settings": {
            "soundVolume": "Number",
            "musicVolume": "Number",
            "wordVolume": "Number",
            "difficultWord": "Boolean",
            "deleteWord": "Boolean",
            "translateWord": "Boolean",
            "transleteSentences": "Boolean",
            "theme": "String"
        },
        "statistics": {
            "gameName": "String",
            "totalWords": "Number",
            "correctPercent": "Number",
            "longestSeries": "Number",
            "date": "String"
        },
      }
    ```

</details>


**GetUserWords**
----
Delete specified car from a garage

<details>

* **URL**

    /userWords

* **Method:**

    `Get`
    
* **NEED TOKEN**

* **Success Response:**

  * **Code:** 200 OK <br />
</details>

**UpdateUserWords**
----
Update word in the database.

<details>

* **URL**

    /userWords
    
* **NEED TOKEN**

* **Method:**

    `Post`

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    
</details>

**UserStatistic**
----


<details>

* **URL**

    /statistics

* **Method:**

    `Post`

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    Ещё не тестил
</details>

**ChangeName**
----
Ещё не тестил

<details>

* **URL**

    /name

* **NEED TOKEN**

* **Method:**

    `Post`

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    Ещё не тестил
</details>

**UploadNewImage**
----
* **NEED TOKEN**

<details>

* **URL**

    /upload


* **Method:**

    `Post`

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    Ещё не тестил
</details>

**Feedback**
----
Ещё не тестил

<details>

* **URL**

    /feedback

* **Method:**

    `Post`

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    Ещё не тестил
</details>

