version "4.10"

// --- MANEJADOR DEL ESCENARIO ---
class EscenarioHandler : StaticEventHandler
{
    override void OnRegister()
    {
        Console.Printf("Escenario de Doom cargado correctamente.");
    }

    override void WorldLoaded(WorldEvent e)
    {
        if (e.IsSaveGame) return;
        StatusBar.ShowMessage("MISIÓN: Encuentra la reliquia perdida en la base.", 5.0, "EscenarioFont");
    }

    override void WorldThingSpawned(WorldEvent e)
    {
        if (e.Thing is "PlayerPawn")
        {
            e.Thing.A_Print("Bienvenido al escenario personalizado de Roberto.");
        }
    }
}

// --- ACTOR PERSONALIZADO ---
class GuardianDelEscenario : DoomImp
{
    Default
    {
        Health 120;
        Speed 12;
        Scale 1.2;
        Translation "160:167=112:127";
    }
    // Estados usando el nuevo sprite GRDN
    states
    {
        Spawn:
            GRDN A -1;
            Loop;
        See:
            GRDN A 4 A_Chase;
            Loop;
        Missile:
            GRDN A 8 A_FaceTarget;
            GRDN A 8 A_TroopAttack;
            Goto See;
        Pain:
            GRDN A 2 A_Pain;
            Goto See;
        Death:
            GRDN A 8;
            GRDN A 8 A_Scream;
            GRDN A 6 A_NoBlocking;
            Stop;
    }
}

// --- OBJETO DE LA MISIÓN ---
class ReliquiaDeBase : Inventory
{
    Default
    {
        Inventory.PickupMessage "Has encontrado la Reliquia de la Base. ¡Misión cumplida!";
        Inventory.Icon "BON1A0";
        +INVENTORY.ALWAYSPICKUP
        Scale 2.0;
    }

    states
    {
        Spawn:
            BON1 ABCDCB 6 Bright;
            Loop;
    }
}

// --- ENEMIGO VOLADOR: DRON DE SEGURIDAD ---
class NeonSecurityDrone : Cacodemon
{
    Default
    {
        Health 50;
        Radius 20;
        Height 40;
        Speed 10;
        Scale 0.6;
        Floating 1;
        +NOGRAVITY
        +FLOAT
        Tag "Dron de Seguridad Neón";
    }

    states
    {
    Spawn:
        DRON A 10 A_Look;
        Loop;
    See:
        DRON A 3 A_Chase;
        Loop;
    Missile:
        DRON A 5 A_FaceTarget;
        DRON A 5 Bright A_HeadAttack; // Dispara proyectil de Cacodemon
        Goto See;
    Death:
        DRON A 5 A_Scream;
        DRON A 5 A_NoBlocking;
        DRON A 5 A_Explode;
        Stop;
    }
}
