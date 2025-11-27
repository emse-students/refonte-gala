<script lang="ts">
    import { asset } from "$app/paths";
</script>

<footer>
    <a href="mailto: gala@emse.fr">
        <img src={asset("/footer/logo_mail.png")} alt="Logo Mail" class="logo-mail" />
    </a>
    <a href="https://www.facebook.com/galaminessaintetienne?locale=fr_FR">
        <img src={asset("/footer/facebook.png")} alt="Logo Facebook" class="logo-facebook" />
    </a>

</footer>

<style>
    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 20px;
        background-color:blueviolet;
    }
    .logo-mail {
        width: 40px;
        height: 40px;
    }

    .logo-facebook {
        width: 40px;
        height: 40px;
    }
</style>