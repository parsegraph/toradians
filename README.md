# toRadians & toDegrees

This module provides two methods to convert between degrees and radians.

    import { toRadians, toDegrees } from "parsegraph-toradians";

    assert.equal(toDegrees(Math.PI), 180);
    assert.equal(toRadians(180), Math.PI);
