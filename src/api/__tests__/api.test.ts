// tslint:disable:no-expression-statement
import { buildParameters } from '../api_client';
import { aString, aNumber } from '../../application/__tests__/helpers/random_test_values';

describe('build parameters', () => {
    it('with just a task id', () => {
        const taskId = aString();
        const result = buildParameters(taskId, undefined);
        expect(result).toEqual({ related_to_task: `${taskId}` });
    });

    it('with a task id and location', () => {
        const taskId = aString();
        const x = aNumber();
        const y = aNumber();
        const location = makeLocation(x, y);
        const result = buildParameters(taskId, location);
        expect(result).toEqual({
            proximity: `${x},${y}`,
            related_to_task: taskId,
            user_location: `${x},${y}`,
        });
    });
});

const makeLocation = (x: number, y: number): LocationData => ({
    coords: {
        longitude: x,
        latitude: y,
        heading: aNumber(),
        speed: aNumber(),
        altitude: aNumber(),
        accuracy: aNumber(),
    },
    timestamp: aNumber(),
});
