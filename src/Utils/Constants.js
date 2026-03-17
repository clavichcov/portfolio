import web from '../Images/web.jpg';
import electric from '../Images/electricidad.jpg';
import ti from '../Images/soporte-ti.jpg';
import linkedin from '../Images/Icon/linkedin.png'
import github from '../Images/Icon/github.png'
import discord from '../Images/Icon/discord.png'
import msteams from '../Images/Icon/skype.png'
import myphoto from '../Images/foto.jpg'

export const SERVICE_IMAGES = {
    electric:Object.fromEntries(
        Object.entries(import.meta.glob('../Images/services/electric/*.{png,jpg,jpeg,svg,gif,webp}'))
            .map(([path, module]) => [path.split('/').pop().split('.')[0], module])
    ),
    itsupport:Object.fromEntries(
        Object.entries(import.meta.glob('../Images/services/it_support/*.{png,jpg,jpeg,svg,gif,webp}'))
            .map(([path, module]) => [path.split('/').pop().split('.')[0], module])
    ),
    webdeveloper:Object.fromEntries(
        Object.entries(import.meta.glob('../Images/services/web_developer/*.{png,jpg,jpeg,svg,gif,webp}'))
            .map(([path, module]) => [path.split('/').pop().split('.')[0], module])
    ),
};

export const IMAGES = {
    web,
    electric,
    ti,
    linkedin,
    github,
    discord,
    msteams,
    myphoto,
}

export const LINKS = {
    linkedin:"https://www.linkedin.com/in/alexander-m-artemiev/",
    github:"https://github.com/clavichcov",
    discord:"https://discord.com/users/1289590740011450431",
    msteams:"",

}