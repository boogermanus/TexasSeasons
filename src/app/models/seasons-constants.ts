import { ISeason } from '../interfaces/iseason';

export class SeasonsConstants {
    private static year = new Date().getFullYear();

    private static getActualSpring(): ISeason {
        const start = new Date(this.year, 2, 1);
        const end = new Date(this.year, 2, this.year % 4 === 0 ? 29 : 28);

        return {
            start,
            end,
            name: 'Actual Spring',
            description: 'What most of y\'all call late March till late June'
        };
    }

    private static getPreSummer(): ISeason {
        const start = new Date(this.year, 3, 1);
        const end = new Date(this.year, 4, 30);

        return {
            start,
            end,
            name: 'Pre-Summer',
            description: 'Expect both spring and summer weather.'
        };
    }

    private static getActualSummer(): ISeason {
        const start = new Date(this.year, 5, 1);
        const end = new Date(this.year, 6, 30);

        return {
            start,
            end,
            name: 'Actual Summer',
            description: 'It\'s gettin\' hot y\'all, ya hear?'
        };
    }

    private static getMelt(): ISeason {
        const start = new Date(this.year, 7, 1);
        const end = new Date(this.year, 8, 31);

        return {
            start,
            end,
            name: 'Melt',
            description: 'Best avoid visiting unless you know someone who owns a pool.'
        };
    }

    private static getPostMelt(): ISeason {
        const start = new Date(this.year, 9, 1);
        const end = new Date(this.year, 9, 30);

        return {
            start,
            end,
            name: 'Post-Melt',
            description: 'Akin to Actual Summer, but last a only a month.'
        };
    }

    private static getSpookySummer(): ISeason {
        const start = new Date(this.year, 10, 1);
        const end = new Date(this.year, 10, 31);

        return {
            start,
            end,
            name: 'Spooky Summer',
            description: 'Just like Halloween, the weather\'s gonna be spooky!'
        };
    }

    private static getFakeFall(): ISeason {
        const start = new Date(this.year, 11, 1);
        const end = new Date(this.year, 11, 20);

        return {
            start,
            end,
            name: 'Fake Fall',
            description: 'Just when you thought you wouldn\'t need the A/C anymore.'
        };
    }

    private static getActualFall(): ISeason {
        const start = new Date(this.year, 11, 21);
        const end = new Date(this.year, 11, 30);

        return {
            start,
            end,
            name: 'Actual Fall',
            description: 'What everybody else calls late September to late December.'
        };
    }

    private static getTShirtWinter(): ISeason {
        const start = new Date(this.year, 12, 1);
        const end = new Date(this.year, 12, 31);

        return {
            start,
            end,
            name: 'T-Shirt Winter',
            description: 'The month you wash both Winter and Summer cloathing in the same load.'
        };
    }

    private static getActualWinter(): ISeason {
        const start = new Date(this.year, 1, 1);
        const end = new Date(this.year, 1, 10);

        return {
            start,
            end,
            name: 'Actual Winter',
            description: 'They got an inch of snow in Amarillo, y\'all!'
        };
    }

    private static getSuffle(): ISeason {
        const start = new Date(this.year, 1, 11);
        const end = new Date(this.year, 1, 31);

        return {
            start,
            end,
            name: 'Shuffle',
            description: 'It\'s the Texas shuffle!'
        };
    }

    public static getSeasons(): ISeason[] {
        return [
            this.getActualSpring(),
            this.getPreSummer(),
            this.getActualSummer(),
            this.getMelt(),
            this.getPostMelt(),
            this.getSpookySummer(),
            this.getFakeFall(),
            this.getActualFall(),
            this.getTShirtWinter(),
            this.getActualWinter(),
            this.getSuffle()
        ];

    }
}
