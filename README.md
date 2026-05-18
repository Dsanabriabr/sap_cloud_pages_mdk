# SAP MDK + Native iOS Interoperability Study

## Objective
This project aims to explore the integration between SAP Mobile Development Kit (MDK) and native iOS (Swift) capabilities, focusing on:

- Cloud-to-device data flow using OData services  
- Offline/online data consistency  
- UI customization beyond standard MDK capabilities  
- Native interoperability using Swift within an MDK app  

---

## Extra Insight
While SAP MDK abstracts much of the complexity of mobile development, this study intentionally breaks abstraction boundaries to:

- Understand how MDK communicates with backend services  
- Extend MDK capabilities using native iOS code  
- Explore how far customization can go without abandoning MDK  

---

## Overview
This project is based on the official SAP MDK tutorial using the Mobile Sample OData (ESPM) service.

The application demonstrates:

- CRUD operations via OData  
- Cloud synchronization  
- Local data persistence (Offline Store)  
- UI customization and theming  
- Native iOS integration triggered from MDK  

---

## About
The project uses:

- SAP MDK for cross-platform mobile development  
- SAP BTP Mobile Services for backend connectivity  
- OData (ESPM) as the data source  
- Swift (iOS Native) for extending functionality  

It combines metadata-driven development with native code execution, showcasing a hybrid approach.

---

## Scope of This Implementation
This implementation covers:

- MDK application generated from SAP Business Application Studio  
- Integration with Mobile Sample OData Service (ESPM)  
- Offline-enabled application with sync capabilities  
- Custom UI styling (color palette adjustments)  
- Native iOS module integration via button-triggered action  

---

## Feature Implemented

### Custom Color Palette
- Adjusted default MDK styles  
- Applied custom theme elements to improve UI identity  

---

### Native Dark Mode / Light Mode Switch
- Implemented a native Swift class  
- Triggered via MDK button using NativeScript bridge  
- Dynamically switches between:
  - Light Mode  
  - Dark Mode  

#### Key Concept:
MDK → NativeScript → Swift (iOS runtime)

This demonstrates real interoperability between:
- MDK metadata layer  
- Native iOS runtime  

---

## Improvements Over the Original Tutorial

| Area | Original Tutorial | This Implementation |
|------|----------------|-------------------|
| UI Customization | Default styles | Custom color palette |
| Native Integration | Not included | Swift native class |
| System Features | Limited | Dark/Light mode switching |
| Architecture Understanding | High-level | Deep dive into layers |

---

## Goals of This Study

- Understand MDK internal architecture  
- Explore Offline OData behavior  
- Validate native extensibility  
- Compare MDK vs Native SDK approaches  
- Push MDK beyond “low-code” boundaries  

---

## Contributions

This project contributes with:

- A practical example of MDK + Native iOS interoperability  
- A simplified approach to extending MDK with Swift  
- A reference for developers wanting more control over MDK apps  
- Insights into architectural trade-offs between abstraction vs control  

---

## References

- SAP MDK Overview  
https://help.sap.com/doc/f53c64b93e5140918d676b927a3cd65b/Cloud/en-US/docs-en/guides/getting-started/mdk/overview.html  

- Using the Mobile Sample Service (ESPM)  
https://help.sap.com/doc/f53c64b93e5140918d676b927a3cd65b/Cloud/en-US/docs-en/guides/features/backend-connectivity/common/sample.html  

- Native iOS inside MDK App – Hello Native World  
https://community.sap.com/t5/technology-blog-posts-by-members/native-ios-inside-mdk-app-hello-native-world/ba-p/13562157  

---

## Final Thoughts

This project shows that:

MDK is not a limitation — it's a foundation.

By combining MDK with native Swift, it is possible to:

- Maintain cross-platform efficiency  
- While still leveraging platform-specific power  

---

## Next Steps (Future Exploration)

### NFC Integration

A natural evolution of this project is to integrate native iOS NFC capabilities:

- Scan NFC tags  
- Retrieve UID  
- Bind physical assets to OData entities  

Reference:  
MDK iOS NFC UID Scanner  
https://community.sap.com/t5/technology-blog-posts-by-members/mdk-ios-nfc-uid-scanner-how-to-use-native-functionalities-in-sap-mdk-using/ba-p/13553764  
