<script lang="ts">
    import { asset } from "$app/paths";
</script>
<div class="page-content">
    <h1>Accueil</h1>
    <img src={asset("/accueil/facadeENSMSE.jpg")} alt="Façade de l'école des Mines de Saint-Étienne" class="facade-img" />
    <p>Bienvenue sur le site officiel du Gala Mines Saint-Étienne 2026 !</p>
</div>
<style>
    .facade-img {
        max-width: 80%;
        height: auto;
        margin: 20px auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }

    .page-content {
        text-align: center;
        background: linear-gradient(180deg, #2874A6 0%,  #1B4F72 100%);
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .page-content h1{
        font-family: 'Cinzel Decorative', serif;
        color: rgba(255, 217, 0, 0.94);
        font-size: 4em;
        font-weight: bold;
        text-shadow:
            2px 2px 4px #000000;
    }

    .page-content p{
        font-family: serif;
        color: rgba(255, 217, 0, 0.94);
        font-size: 1.5em;
        font-weight : normal;
    }
</style>