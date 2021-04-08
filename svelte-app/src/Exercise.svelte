<script>
    import {db} from './firestore.js'
    import WordsExercise from './WordsExercise.svelte'

    let dictionary = []
    db.collection('dictionary').get().then((snapshot) => {
       dictionary = snapshot.docs
       
       dictionary.forEach(doc => {
        console.log(doc.data())
       })
    })
</script>

<div class="rubrik">
        <b>Tyska</b>
        <b>Svenska</b>
</div> 

<div id="dictionary">
    {#each dictionary as words}
        <WordsExercise words={words.data()}/>
    {/each}
</div>

<style>
    .rubrik{
        display: grid;
        grid-template-columns: 6fr 6fr;
        grid-gap: 10px;
        width: 400px;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 10px;
    }
</style>