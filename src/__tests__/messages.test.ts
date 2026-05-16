import { describe, it, expect } from "vitest";
import en from "../messages/en.json";
import th from "../messages/th.json";

describe("translation messages", () => {
  it("English messages have required keys", () => {
    expect(en).toHaveProperty("common");
    expect(en).toHaveProperty("home");
    expect(en).toHaveProperty("about");
  });

  it("Thai messages have required keys", () => {
    expect(th).toHaveProperty("common");
    expect(th).toHaveProperty("home");
    expect(th).toHaveProperty("about");
  });

  it("English and Thai have the same top-level keys", () => {
    const enKeys = Object.keys(en).sort();
    const thKeys = Object.keys(th).sort();
    expect(enKeys).toEqual(thKeys);
  });

  it("home namespace has required keys in both locales", () => {
    const requiredKeys = ["title", "description", "getStarted"];
    for (const key of requiredKeys) {
      expect((en as any).home).toHaveProperty(key);
      expect((th as any).home).toHaveProperty(key);
    }
  });

  it("common namespace has required keys in both locales", () => {
    const requiredKeys = ["welcome", "language", "switchLocale"];
    for (const key of requiredKeys) {
      expect((en as any).common).toHaveProperty(key);
      expect((th as any).common).toHaveProperty(key);
    }
  });
});
