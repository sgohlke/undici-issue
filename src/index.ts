import { BodyMixin } from "undici";
import BodyReadable from "undici/types/readable";

export class TestResponseBody extends BodyReadable implements BodyMixin {
    declare body: never
    constructor(bodyAsString: string) {
        super()
        this.push(bodyAsString)
    }
}