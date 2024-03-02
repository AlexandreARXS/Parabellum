import {parabellum} from "./module/config";
import ParabellumItemSheet from "./module/sheets/ParabellumItemSheet";

Hooks.once("init", function(){
    console.log("Parabellum | Inicializando Sistema Parabellum");

    CONFIG.parabellum = parabellum;


    Items.untegisterSheet("core", ItemSheet);
    Items.registerSheet("parabellum", ParabellumItemSheet, {makeDefault:true});
});